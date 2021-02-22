import React from "react";
import OsoGame from "../scripts/OsoGame";
import OsoGridComp from "./OsoGridComp";
import { Input } from "../scripts/utilities";
import OsoMatch from "../scripts/OsoMatch";

interface State {
    game: OsoGame | null
    matches: OsoMatch[] | null
}

export default class OsoGameComp extends React.Component<Record<string, never>, State> {
    constructor(props: Record<string, never> = {}) {
        super(props);
        this.handlePlay = this.handlePlay.bind(this)
        this.handleSolitaire = this.handleSolitaire.bind(this)
        this.handleExit = this.handleExit.bind(this)
        this.state = {
            game: null,
            matches: null
        }
    }

    handlePlay(e: React.MouseEvent<HTMLButtonElement>): void {
        e.preventDefault()
        const colsInput = document.getElementById("cols") as HTMLInputElement
        const rowsInput = document.getElementById("rows") as HTMLInputElement

        if (colsInput && rowsInput) {
            const cols = Input.getInteger(colsInput) || 0
            const rows = Input.getInteger(rowsInput) || 0

            if ([cols, rows].every(v => v > 0)) {
                const game = new OsoGame(cols, rows)
                this.setState({
                    game: game
                })
            }
        }
    }

    handleSolitaire(): void {
        const game = this.state.game
        if (game) {
            game.solitaire()
            this.setState({ matches: game.matches })
        }
    }

    handleExit(): void {
        this.setState({
            game: null,
            matches: null
        })
    }

    render(): React.ReactNode {
        const game = this.state.game
        let container

        if (game) {
            container = (
                <div className="game">
                    <OsoGridComp table={game.table} matches={game.matches}/>
                    <button className="solitaire" onClick={this.handleSolitaire}>Solitaire</button>
                    <button className="exit" onClick={this.handleExit}>Salir</button>
                </div>
            )
        } else {
            container = (
                <div className="mainMenu">
                    <form>
                        <h1>Juego <strong>OSO</strong></h1>
                        <div>
                            <label htmlFor="cols">Columnas</label>
                            <input type="number" id="cols"/>
                        </div>
                        <div>
                            <label htmlFor="rows">Filas</label>
                            <input type="number" id="rows"/>
                        </div>
                        <button type="submit" onClick={this.handlePlay}>Jugar</button>
                    </form>
                </div>
            )
        }
        return (
            <div className="OsoGame">
                { container }
            </div>
        )
    }
}