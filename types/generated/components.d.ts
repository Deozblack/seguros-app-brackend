import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBackgroundInfo extends Schema.Component {
  collectionName: 'components_components_background_infos';
  info: {
    displayName: 'background-info';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    aling_image: Attribute.Enumeration<['right', 'left']>;
    image: Attribute.Media;
  };
}

export interface ComponentsBlog extends Schema.Component {
  collectionName: 'components_components_blogs';
  info: {
    displayName: 'blog';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    relation_details: Attribute.Relation<
      'components.blog',
      'oneToMany',
      'api::blog-detail.blog-detail'
    >;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
    icon: 'write';
  };
  attributes: {
    text: Attribute.String;
    internal_url: Attribute.String;
    external_url: Attribute.String;
  };
}

export interface ComponentsCarrouselInfo extends Schema.Component {
  collectionName: 'components_components_carrousel_infos';
  info: {
    displayName: 'carrousel-info';
    icon: 'question';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsContentAlingText extends Schema.Component {
  collectionName: 'components_components_content_aling_texts';
  info: {
    displayName: 'content-aling-text';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    aling_image: Attribute.Enumeration<['right', 'left']>;
  };
}

export interface ComponentsContentHero extends Schema.Component {
  collectionName: 'components_components_content_heroes';
  info: {
    displayName: 'hero';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentsContentText extends Schema.Component {
  collectionName: 'components_components_content_texts';
  info: {
    displayName: 'content-text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button_text: Attribute.String;
    button_url: Attribute.String;
  };
}

export interface ComponentsTeamList extends Schema.Component {
  collectionName: 'components_components_team_lists';
  info: {
    displayName: 'team-list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.String;
    presentation: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ContentsContentBackgroundInfo extends Schema.Component {
  collectionName: 'components_contents_content_background_infos';
  info: {
    displayName: 'content-background-info';
    icon: 'dashboard';
  };
  attributes: {
    background: Attribute.Component<'components.background-info'>;
  };
}

export interface ContentsContentCarrouselInfo extends Schema.Component {
  collectionName: 'components_contents_content_carrousel_infos';
  info: {
    displayName: 'content-carrousel-info';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    carrousel: Attribute.Component<'components.carrousel-info', true>;
    button_text: Attribute.String;
    button_url: Attribute.String;
  };
}

export interface ContentsContentHero extends Schema.Component {
  collectionName: 'components_contents_content_heroes';
  info: {
    displayName: 'content-hero';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    hero: Attribute.Component<'components.content-hero', true> &
      Attribute.SetMinMax<{
        max: 3;
      }>;
  };
}

export interface ContentsContentTeamList extends Schema.Component {
  collectionName: 'components_contents_content_team_lists';
  info: {
    displayName: 'content-team-list';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    worker: Attribute.Component<'components.team-list', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.background-info': ComponentsBackgroundInfo;
      'components.blog': ComponentsBlog;
      'components.button': ComponentsButton;
      'components.carrousel-info': ComponentsCarrouselInfo;
      'components.content-aling-text': ComponentsContentAlingText;
      'components.content-hero': ComponentsContentHero;
      'components.content-text': ComponentsContentText;
      'components.team-list': ComponentsTeamList;
      'contents.content-background-info': ContentsContentBackgroundInfo;
      'contents.content-carrousel-info': ContentsContentCarrouselInfo;
      'contents.content-hero': ContentsContentHero;
      'contents.content-team-list': ContentsContentTeamList;
    }
  }
}
