import React from 'react';
import { Query } from 'react-apollo';
import { USER_QUERY } from '../queries'
import './user.css';

const Contactos = () => (
	<Query query={USER_QUERY}>
		{({loading, error, data}) => {
			if(loading) return '...Cargando';
			if(error) return `Error: ${error.message}`;
			const store = data.viewer.repositories.edges;
			return (
					<React.Fragment>
							{store.map((item, index) => {
								return (
									<div className="b-row" key={index}>
										<div className="b-col-2">{index}</div>
										<div className="b-col-2">{item.node.name}</div>
										<div className="b-col-2">{item.node.createdAt}</div>
										<div className="b-col-3">{item.node.url}</div>
										<div className="b-col-2">{item.node.stargazers.totalCount}</div>
										<div className="b-col-2">{item.node.watchers.totalCount}</div>
									</div>
								)
							})} 
					</React.Fragment>            
			)
		}}
	</Query>
);

export default Contactos;