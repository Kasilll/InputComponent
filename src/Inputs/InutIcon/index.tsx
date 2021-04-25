import { Input } from '@material-ui/core'
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import primary from '../img/secondary.svg'

interface InputPropsIcon {
	position: 'left' | 'rigth'
	value: string
	type: 'default' | 'filled'
	onChange: any
	placeholder: string
	disabled?: boolean
	error?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		imgRight: {
			position: 'absolute',
			right: '11.67px',
			width: 16,
			height: 16
		},
		imgLeft: {
			position: 'absolute',
			left: '13.64px',
			width: 16,
			height: 16
		},
		paddingBig: {
			paddingLeft: 40
		},
		paddingSmall: {
			paddingLeft: 12
    },
    default : {
      background:'#F5F8FF',
      border: "1px solid #D9E5FA"
    },
    filled : {
      background: "white",
      border: "1px solid #E1E6ED"
    },
		input: {
			position: 'relative',
			height: 40,
			width: 200,
			fontSize: 14,
			boxSizing: 'border-box',
			
		
			fontStyle: 'Regular',
			fontWeight: 400,
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

const InputIcon: React.FC<InputPropsIcon> = ({ position, value, type, onChange, placeholder, disabled, error }) => {
  const classes = useStyles()
	return (
    <Input
      className={	position === 'left' ? `${classes.input} ${classes.paddingBig} ${classes[type]}`: `${classes.input} ${classes.paddingSmall} ${classes[type]}`}
			placeholder={placeholder}
			disableUnderline={true}
			endAdornment={<img className={position === 'left' ? classes.imgLeft : classes.imgRight} src={primary} />}
			disabled={disabled}
			error={error}
			onChange={(e) => onChange(e.target.value)}
			value={value}
		/>
	)
}
export default InputIcon
