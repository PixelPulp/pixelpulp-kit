import { Box, Flex } from '../primitives'
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { styled, keyframes } from '../../stitches.config'

type Props = {
  fromImg: string
  toImg: string
} & ComponentPropsWithoutRef<typeof Flex>

const Img = styled('img', {
  width: 56,
  height: 56,
  borderRadius: 12,
  objectFit: 'cover',
})

const ProgressDot = styled(Box, {
  borderRadius: '50%',
  width: 12,
  height: 12,
})

const loadingStart = keyframes({
  '0%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
  '20%': { transform: 'scale(1)', backgroundColor: '$dotActiveColor' },
  '100%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
})
const loadingStartHalf = keyframes({
  '0%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
  '50%': { transform: 'scale(1)', backgroundColor: '$dotActiveColor' },
  '100%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
})

const loadingMiddle = keyframes({
  '0%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
  '20%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
  '40%': { transform: 'scale(1)', backgroundColor: '$dotActiveColor' },
  '100%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
})

const loadingEndHalf = keyframes({
  '0%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
  '50%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
  '70%': { transform: 'scale(1)', backgroundColor: '$dotActiveColor' },
  '100%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
})

const loadingEnd = keyframes({
  '0%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
  '40%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
  '60%': { transform: 'scale(1)', backgroundColor: '$dotActiveColor' },
  '100%': { transform: 'scale(0.8)', backgroundColor: '$dotInactiveColor' },
})

const TransactionProgress: FC<Props> = ({ fromImg, toImg, ...props }) => {
  return (
    <Flex {...props} align="center">
      <Img src={fromImg} />
      <Flex css={{ gap: '$1', mx: 23 }}>
        <ProgressDot
          css={{ animation: `${loadingStart} 1s ease-in-out infinite` }}
        />
        <ProgressDot
          css={{ animation: `${loadingStartHalf} 1s ease-in-out infinite` }}
        />
        <ProgressDot
          css={{ animation: `${loadingMiddle} 1s ease-in-out infinite` }}
        />
        <ProgressDot
          css={{ animation: `${loadingEndHalf} 1s ease-in-out infinite` }}
        />
        <ProgressDot
          css={{ animation: `${loadingEnd} 1s ease-in-out infinite` }}
        />
      </Flex>
      <Img src={toImg} />
    </Flex>
  )
}

export default TransactionProgress
