import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { ExpandMoreOutlined, ExpandLessOutlined } from '@mui/icons-material';

import mstyle from './Navbar.module.css';

export default function NavItem(props) {
	const { item, handleClick, barOpened } = props;

	const [subcategoryOpened, setSubcategoryOpened] = useState(false);
	const handleOpenSub = () => {
		setSubcategoryOpened((prev) => !prev);
	};

	const navRefSub = useRef(null);

	useEffect(() => {
		setSubcategoryOpened(false);
	}, [barOpened]);

	useEffect(() => {
		const clickOutside = (evt) => {
			if (
				navRefSub.current &&
				!navRefSub.current.contains(evt.target) &&
				!subcategoryOpened
			) {
				setSubcategoryOpened(false);
			}
		};
		document.addEventListener('mousedown', clickOutside);

		return () => {
			document.removeEventListener('mousedown', clickOutside);
		};
	}, [navRefSub]);

	if (item.childrens) {
		return (
			<div
				ref={navRefSub}
				className={mstyle.categoryitem}
				onClick={handleOpenSub}
			>
				<div className={mstyle.subcategory_title}>
					<a href='#'>{item.title}</a>
					{subcategoryOpened ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
				</div>

				<div
					className={
						subcategoryOpened
							? `${mstyle.subcategory_container} ${mstyle.opened}`
							: `${mstyle.subcategory_container} `
					}
				>
					{item.childrens.map((child, index) => (
						<NavItem key={index} item={child} handleClick={handleClick} />
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className={mstyle.categoryitem}>
				<Link to={item.path} onClick={handleClick}>
					{' '}
					{item.title}{' '}
				</Link>
			</div>
		);
	}
}
