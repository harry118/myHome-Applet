import { Component, FC } from 'react';
import { useDidShow } from '@tarojs/taro';
import { Button, Grid, GridItem } from '@nutui/nutui-react-taro';
import './index.less';

const Index: FC = () => {
  return (
    <div className='home'>
      <Grid gutter={3} square>
        <GridItem icon='download' text='文字' />
        <GridItem icon='dongdong' text='文字' />
        <GridItem icon='dongdong' text='文字' />
      </Grid>
    </div>
  );
};

// class Index extends Component<PropsWithChildren> {
//   constructor(props: any) {
//     super(props);
//   }

//   componentWillMount() {}

//   componentDidMount() {}

//   componentWillUnmount() {}

//   componentDidShow() {}

//   componentDidHide() {}

//   render() {
//     return (
//       <div className='nutui-react-demo'>
//         <div className='index'>欢迎使用 NutUI React 开发 Taro 多端项目。</div>
//         <div className='index'>
//           <Button type='primary' className='btn'>
//             NutUI React Button
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }
export default Index;
