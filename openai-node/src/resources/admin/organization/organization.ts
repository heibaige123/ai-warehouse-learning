// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdminAPIKeysAPI from './admin-api-keys';
import {
  AdminAPIKey,
  AdminAPIKeyCreateParams,
  AdminAPIKeyCreateResponse,
  AdminAPIKeyDeleteResponse,
  AdminAPIKeyListParams,
  AdminAPIKeys,
  AdminAPIKeysPage,
} from './admin-api-keys';
import * as AuditLogsAPI from './audit-logs';
import { AuditLogListParams, AuditLogListResponse, AuditLogListResponsesPage, AuditLogs } from './audit-logs';
import * as CertificatesAPI from './certificates';
import {
  Certificate,
  CertificateActivateParams,
  CertificateActivateResponse,
  CertificateActivateResponsesPage,
  CertificateCreateParams,
  CertificateDeactivateParams,
  CertificateDeactivateResponse,
  CertificateDeactivateResponsesPage,
  CertificateDeleteResponse,
  CertificateListParams,
  CertificateListResponse,
  CertificateListResponsesPage,
  CertificateRetrieveParams,
  CertificateUpdateParams,
  Certificates,
} from './certificates';
import * as DataRetentionAPI from './data-retention';
import { DataRetention, DataRetentionUpdateParams, OrganizationDataRetention } from './data-retention';
import * as InvitesAPI from './invites';
import {
  Invite,
  InviteCreateParams,
  InviteDeleteResponse,
  InviteListParams,
  Invites,
  InvitesPage,
} from './invites';
import * as RolesAPI from './roles';
import {
  Role,
  RoleCreateParams,
  RoleDeleteResponse,
  RoleListParams,
  RoleUpdateParams,
  Roles,
  RolesPage,
} from './roles';
import * as SpendAlertsAPI from './spend-alerts';
import {
  OrganizationSpendAlert,
  OrganizationSpendAlertDeleted,
  OrganizationSpendAlertsPage,
  SpendAlertCreateParams,
  SpendAlertListParams,
  SpendAlertUpdateParams,
  SpendAlerts,
} from './spend-alerts';
import * as UsageAPI from './usage';
import {
  Usage,
  UsageAudioSpeechesParams,
  UsageAudioSpeechesResponse,
  UsageAudioTranscriptionsParams,
  UsageAudioTranscriptionsResponse,
  UsageCodeInterpreterSessionsParams,
  UsageCodeInterpreterSessionsResponse,
  UsageCompletionsParams,
  UsageCompletionsResponse,
  UsageCostsParams,
  UsageCostsResponse,
  UsageEmbeddingsParams,
  UsageEmbeddingsResponse,
  UsageFileSearchCallsParams,
  UsageFileSearchCallsResponse,
  UsageImagesParams,
  UsageImagesResponse,
  UsageModerationsParams,
  UsageModerationsResponse,
  UsageVectorStoresParams,
  UsageVectorStoresResponse,
  UsageWebSearchCallsParams,
  UsageWebSearchCallsResponse,
} from './usage';
import * as GroupsAPI from './groups/groups';
import {
  Group,
  GroupCreateParams,
  GroupDeleteResponse,
  GroupListParams,
  GroupUpdateParams,
  GroupUpdateResponse,
  Groups,
  GroupsPage,
} from './groups/groups';
import * as ProjectsAPI from './projects/projects';
import {
  Project,
  ProjectCreateParams,
  ProjectListParams,
  ProjectUpdateParams,
  Projects,
  ProjectsPage,
} from './projects/projects';
import * as UsersAPI from './users/users';
import {
  OrganizationUser,
  OrganizationUsersPage,
  UserDeleteResponse,
  UserListParams,
  UserUpdateParams,
  Users,
} from './users/users';

export class Organization extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  adminAPIKeys: AdminAPIKeysAPI.AdminAPIKeys = new AdminAPIKeysAPI.AdminAPIKeys(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  dataRetention: DataRetentionAPI.DataRetention = new DataRetentionAPI.DataRetention(this._client);
  spendAlerts: SpendAlertsAPI.SpendAlerts = new SpendAlertsAPI.SpendAlerts(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

Organization.AuditLogs = AuditLogs;
Organization.AdminAPIKeys = AdminAPIKeys;
Organization.Usage = Usage;
Organization.Invites = Invites;
Organization.Users = Users;
Organization.Groups = Groups;
Organization.Roles = Roles;
Organization.DataRetention = DataRetention;
Organization.SpendAlerts = SpendAlerts;
Organization.Certificates = Certificates;
Organization.Projects = Projects;

export declare namespace Organization {
  export {
    AuditLogs,
    AuditLogListResponse,
    AuditLogListResponsesPage,
    AuditLogListParams,
  };

  export {
    AdminAPIKeys,
    AdminAPIKey,
    AdminAPIKeyCreateResponse,
    AdminAPIKeyDeleteResponse,
    AdminAPIKeysPage,
    AdminAPIKeyCreateParams,
    AdminAPIKeyListParams,
  };

  export {
    Usage,
    UsageAudioSpeechesResponse,
    UsageAudioTranscriptionsResponse,
    UsageCodeInterpreterSessionsResponse,
    UsageCompletionsResponse,
    UsageCostsResponse,
    UsageEmbeddingsResponse,
    UsageFileSearchCallsResponse,
    UsageImagesResponse,
    UsageModerationsResponse,
    UsageVectorStoresResponse,
    UsageWebSearchCallsResponse,
    UsageAudioSpeechesParams,
    UsageAudioTranscriptionsParams,
    UsageCodeInterpreterSessionsParams,
    UsageCompletionsParams,
    UsageCostsParams,
    UsageEmbeddingsParams,
    UsageFileSearchCallsParams,
    UsageImagesParams,
    UsageModerationsParams,
    UsageVectorStoresParams,
    UsageWebSearchCallsParams,
  };

  export {
    Invites,
    Invite,
    InviteDeleteResponse,
    InvitesPage,
    InviteCreateParams,
    InviteListParams,
  };

  export {
    Users,
    OrganizationUser,
    UserDeleteResponse,
    OrganizationUsersPage,
    UserUpdateParams,
    UserListParams,
  };

  export {
    Groups,
    Group,
    GroupUpdateResponse,
    GroupDeleteResponse,
    GroupsPage,
    GroupCreateParams,
    GroupUpdateParams,
    GroupListParams,
  };

  export {
    Roles,
    Role,
    RoleDeleteResponse,
    RolesPage,
    RoleCreateParams,
    RoleUpdateParams,
    RoleListParams,
  };

  export {
    DataRetention,
    OrganizationDataRetention,
    DataRetentionUpdateParams,
  };

  export {
    SpendAlerts,
    OrganizationSpendAlert,
    OrganizationSpendAlertDeleted,
    OrganizationSpendAlertsPage,
    SpendAlertCreateParams,
    SpendAlertUpdateParams,
    SpendAlertListParams,
  };

  export {
    Certificates,
    Certificate,
    CertificateListResponse,
    CertificateDeleteResponse,
    CertificateActivateResponse,
    CertificateDeactivateResponse,
    CertificateListResponsesPage,
    CertificateActivateResponsesPage,
    CertificateDeactivateResponsesPage,
    CertificateCreateParams,
    CertificateRetrieveParams,
    CertificateUpdateParams,
    CertificateListParams,
    CertificateActivateParams,
    CertificateDeactivateParams,
  };

  export {
    Projects,
    Project,
    ProjectsPage,
    ProjectCreateParams,
    ProjectUpdateParams,
    ProjectListParams,
  };
}
