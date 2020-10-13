import tw from 'twin.macro'
import DefaultLayout from 'src/layouts/DefaultLayout'

const Title = tw.h1`text-red`

const HomePage = () => (
  <DefaultLayout>
    <Title>hello world !</Title>
  </DefaultLayout>
)

export default HomePage
