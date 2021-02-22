import React from "react";
import OsoGame from "../scripts/OsoGame";
import OsoGridComp from "./OsoGridComp";

interface State {
    game: OsoGame | null
}

export default class OsoGameComp extends React.Component<Record<string, never>, State> {
    constructor(props: Record<string, never> = {}) {
        super(props);
        this.handleSolitaire = this.handleSolitaire.bind(this)
        this.handleRegenerate = this.handleRegenerate.bind(this)
        this.state = { game: null }
    }

    handleSolitaire(e: React.MouseEvent<HTMLButtonElement>): void {
        console.log("hS")
    }

    handleRegenerate(): void {
        console.log("hR")
    }

    render(): React.ReactNode {
        const game = this.state.game
        const mainClassName = "main"
        let main

        if (game) {
            main = (
                <div className={mainClassName}>
                    <OsoGridComp table={game.table} matches={game.matches}/>
                    <button onClick={this.handleSolitaire}>Solitaire</button>
                    <button onClick={this.handleRegenerate}>Regenerar tablero</button>
                </div>
            )
        } else {
            main = (
                <div className={mainClassName}>
                    <h1>Juego <strong>OSO</strong></h1>
                    <form>
                        <div>
                            <label htmlFor="cols">Columnas</label>
                            <input type="number" id="cols"/>
                        </div>
                        <div>
                            <label htmlFor="rows">Filas</label>
                            <input type="number" id="rows"/>
                        </div>
                    </form>
                    <button>Jugar</button>
                </div>
            )
        }
        return (
            <div className="OsoGame">
                { main }
            </div>
        )
    }
}