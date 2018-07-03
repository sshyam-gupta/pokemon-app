import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_LINKS = gql`{
  feed {
    links {
      id
      description
      url
    }
  }
}`

class LinkList extends Component {
  render() {
    return (
      <Query query={GET_LINKS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return <div>{data.feed.links.map(link => <Link key={link.id} link={link} />)}</div>
        }}
      </Query>
    )
  }
}

export default LinkList;
