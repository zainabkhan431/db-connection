import Head from 'next/head';
import DataTable from './components/DataTable';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Static Data Table</title>
      </Head>
      <h1 style={{ textAlign: 'center' }}>MUI Data Grid with Static Data</h1>
      <DataTable />
    </div>
  );
}
