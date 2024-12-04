// import * as React from 'react';

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// const news = [
//   {
//     title: '第 0123456 期考生已開放查詢',
//     desc: '報名人數 50人，及格人數 3人',
//   },
//   {
//     title: '第 0123456 期考生已開放查詢',
//     desc: '報名人數 50人，及格人數 3人',
//   },
//   {
//     title: '第 0123456 期考生已開放查詢',
//     desc: '報名人數 50人，及格人數 3人',
//   },
//   {
//     title: '第 0123456 期考生已開放查詢',
//     desc: '報名人數 50人，及格人數 3人',
//   },
// ];

// interface InfoProps {
//   totalPrice: string;
// }

export default function Welcome() {
  return (
    <>
      <Typography variant="h2" sx={{ color: 'gray.500' }}>
        佑大證書查詢系統
      </Typography>
      <Typography gutterBottom
        sx={{
          display: { xs: 'none', md: 'block' },
        }}

      >
        對於在潛在危險環境中工作的組織來說，招募經過核心能力驗證的員工至關重要。雇主和培訓提供者可以使用我們的線上工具檢查候選人的認證。
      </Typography >
      {/* <List disablePadding sx={{ color: 'text.light' }}>
        {news.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.title}
              secondary={product.desc}
            />
            <Typography sx={{ fontWeight: 'medium' }}>
            </Typography>
          </ListItem>
        ))}
      </List> */}
    </>
  );
}
