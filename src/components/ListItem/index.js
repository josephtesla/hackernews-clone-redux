import React from 'react'
import { Item, Title, Host, ExternalLink, Description, CommentLink } from "./styles";
import getSiteHostname from "../../utils/getSiteHostname";
import getTimeSince from '../../utils/getTimeSince';

const LINK_REL = "nofollow noreferrer noopener";

const ListItem = ({ by, kids = [], url, score, title, id, type, time }) => {
  const HN_ROOT = 'https://news.ycombinator.com';
  const HN_ITEM = `${HN_ROOT}/item?id=`;
  const HN_USER = `${HN_ROOT}/user?id=`;
  const site = getSiteHostname(url) || HN_ROOT;

  const commentUrl = `${HN_ITEM}${id}`;
  const userUrl = `${HN_USER}${by}`;

  return (
    <Item>
      <ExternalLink href={url} rel={LINK_REL} target="_blank">
        <Title>
          {title} <Host>({site})</Host>
        </Title>
      </ExternalLink>

      <Description>
        {score} points by {' '}
        <CommentLink href={userUrl} rel={LINK_REL} target="_blank">
          {by}
        </CommentLink> {' '}
        {getTimeSince(time)} {' | '}
        <CommentLink href={commentUrl} rel={LINK_REL} target="_blank">
          {kids.length} comments
        </CommentLink>
      </Description>
    </Item>
  )
}

export default ListItem;