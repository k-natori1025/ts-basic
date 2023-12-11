type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 // 横
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" // 縦
type Player = "first" | "second"

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}
  // パラメーターに渡された位置と現在の位置を比較するメソッド(public)
  distanceFrom(position: Position, player: Player) {
    if(player ==='first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan))
      } 
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -(Math.abs(Number(position.dan) - Number(this.dan))) // 段（縦）の位置は正負反転
      } 
    }
  }
}

// 駒を表すクラス(抽象クラス)
abstract class Piece {
  // Pieceクラスとそのサブクラスからのみアクセスできる
  protected position: Position

  constructor(
    private readonly playerc: Player,
    suji: Suji,
    dan: Dan,
  ) {
    this.position = new Position(suji, dan)
  }
  // メソッドの定義
  // 駒の移動用のメソッド
  moveTo(position: Position) {
    this.position = position
  }

  // 移動できるかどうかを判定するメソッド abstractをつけて宣言しておき、具体的な動きはサブクラスで実装する
  abstract canMoveTo(position: Position, player: Player): boolean

}

// new Piece("first", 1, "1")

class Osho extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (distance.suji < 2 && distance.dan < 2)
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new Osho('first', 5, '1'),
      new Osho('second', 5, '9')
    ]
  }
}


