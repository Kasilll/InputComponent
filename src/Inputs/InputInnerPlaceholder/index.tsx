import TextField from '@material-ui/core/TextField'
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'


interface InputInnerPlaceholderProps {
	size: "m" | "s"
	value: string
	onChange: any
	placeholder: string
	disabled: boolean
	error: boolean
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		Placeholder: {
			color: '#838A96',
			paddingLeft: '2px',
			'&.Mui-focused': {
        color: '#838A96'
			},
			'&.Mui-error': {
				color: '#2C313B'
			}
		},
		TextField: {
			boxSizing: 'border-box',
			border: '1px solid #D9E5FA',
			background: '#F5F8FF',
			fontFamily: 'Roboto',
      fontStyle: 'Regular',
      fontSize:"14px",
			fontWeight: 400,		
			width: '200px',
			color: '#838A96',
			borderRadius: '4px',
			'&:hover': {
				background: '#F5FBFF',
				border: '1px solid #D1EDFF'
			},
			'&.Mui-focused': {
				background: 'white',
				border: '2px solid #74BCF7',
        color: '#2C313B'
			},
			'&.Mui-disabled': {
				background: '#F7F9FC',
				color: '#A1A7B2',
				border: '1px solid #F7F9FC'
			},
			'&.Mui-error': {
				background: 'white',
				border: '1px solid #FA7357',
				color: '#2C313B'
			}
		}
	})
)

const InputInnerPlaceholder: React.FC<InputInnerPlaceholderProps> = ({
	size,
	value,
	onChange,
	placeholder,
	disabled,
	error
}) => {
	const classes = useStyles()

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<TextField
				color="primary"
				id="filled-basic"
				label={placeholder}
				size={size === 's' ? 'small' : 'medium'}
				InputLabelProps={{ className: classes.Placeholder }}
				variant="filled"
				InputProps={{
					disableUnderline: true,
					className: classes.TextField
				}}
				disabled={disabled}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				error={error}
			/>
		</div>
	)
}
export default InputInnerPlaceholder
