import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';
import {RecoilRoot} from 'recoil';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import DateRangePickerPage from './page/DateRangePickerPage';
import ResizeDragModalPage from './page/ResizeDragModalPage';

const router = createBrowserRouter([
	{path: '/', element: <App />},
	{path: '/date', element: <DateRangePickerPage />},
	{path: '/resize-modal', element: <ResizeDragModalPage />},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RecoilRoot>
		<GlobalStyle />
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</RecoilRoot>,
);
