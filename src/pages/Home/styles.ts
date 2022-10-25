import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  .img {
    height: 22.5rem;
    width: 29.75rem;

    align-self: flex-end;
  }
`
export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 21.375rem;
  gap: 3.5rem;
  margin-top: 5.875rem;
`

export const TitleWrapper = styled.div`
  width: 36.75rem;

  .title {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 3rem;

    color: ${(props) => props.theme['gray-900']};
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 4.125rem;
  }
`

export const ServicesWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-400']};

  .right-column {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .left-column {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    width: 2rem;
    border-radius: 9999px;

    margin-right: 0.75rem;
  }

  .cart {
    background: ${(props) => props.theme['yellow-700']};
  }

  .timer {
    background: ${(props) => props.theme['yellow-500']};
  }

  .package {
    background: ${(props) => props.theme['gray-800']};
  }

  .coffee {
    background: ${(props) => props.theme['purple-500']};
  }
`

export const Display = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 2rem;
`
