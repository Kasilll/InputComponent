import React from 'react'
import './App.css'
import InutIcon from './Inputs/InutIcon/index'
import InputOutherPlaceholder from './Inputs/InputOutherPlaceholder/index'
import InputInnerPlaceholder from './Inputs/InputInnerPlaceholder/index'

function App() {
	const [ valueInputIcon, setValueInputIcon ] = React.useState('')
	const [ valutInputOutherText, setValutInputOutherText ] = React.useState('gthbt')
	const [ valueInputInnerPlaceholder, setValueInputInnerPlaceholder ] = React.useState('')
	return (
		<div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
			<div className="input-icon" style={{ display: 'flex' }}>
				<InutIcon
					position="left"
					value={valueInputIcon}
					type="default"
					onChange={setValueInputIcon}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
				<InutIcon
					position="rigth"
					value={valueInputIcon}
					type="default"
					onChange={setValueInputIcon}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
				<InutIcon
					position="left"
					value={valueInputIcon}
					type="filled"
					onChange={setValueInputIcon}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
				<InutIcon
					position="rigth"
					value={valueInputIcon}
					type="filled"
					onChange={setValueInputIcon}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
			</div>
			<div className="input-other" style={{ display: 'flex' }}>
				<InputOutherPlaceholder
					size="s"
					value={valutInputOutherText}
					type="default"
					onChange={setValutInputOutherText}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
				<InputOutherPlaceholder
					size="m"
					value={valutInputOutherText}
					type="default"
					onChange={setValutInputOutherText}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
				<InputOutherPlaceholder
					size="l"
					value={valutInputOutherText}
					type="default"
					onChange={setValutInputOutherText}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
				<InputOutherPlaceholder
					size="s"
					value={valutInputOutherText}
					type="filled"
					onChange={setValutInputOutherText}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
				<InputOutherPlaceholder
					size="m"
					value={valutInputOutherText}
					type="filled"
					onChange={setValutInputOutherText}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
				<InputOutherPlaceholder
					size="l"
					value={valutInputOutherText}
					type="filled"
					onChange={setValutInputOutherText}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
			</div>
			<div className="input-inner">
				<InputInnerPlaceholder
					size="s"
					value={valueInputInnerPlaceholder}
					onChange={setValueInputInnerPlaceholder}
					placeholder="Hello"
					disabled={false}
					error={false}
				/>
			</div>
		</div>
	)
}

export default App
