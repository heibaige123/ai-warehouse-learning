// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyDeleteParams,
  APIKeyDeleteResponse,
  APIKeyListParams,
  APIKeyRetrieveParams,
  APIKeys,
  ProjectAPIKey,
  ProjectAPIKeysPage,
} from './api-keys';
import * as CertificatesAPI from './certificates';
import {
  CertificateActivateParams,
  CertificateActivateResponse,
  CertificateActivateResponsesPage,
  CertificateDeactivateParams,
  CertificateDeactivateResponse,
  CertificateDeactivateResponsesPage,
  CertificateListParams,
  CertificateListResponse,
  CertificateListResponsesPage,
  Certificates,
} from './certificates';
import * as DataRetentionAPI from './data-retention';
import { DataRetention, DataRetentionUpdateParams, ProjectDataRetention } from './data-retention';
import * as HostedToolPermissionsAPI from './hosted-tool-permissions';
import {
  HostedToolPermissionUpdateParams,
  HostedToolPermissions,
  ProjectHostedToolPermissions,
} from './hosted-tool-permissions';
import * as ModelPermissionsAPI from './model-permissions';
import {
  ModelPermissionUpdateParams,
  ModelPermissions,
  ProjectModelPermissions,
  ProjectModelPermissionsDeleted,
} from './model-permissions';
import * as RateLimitsAPI from './rate-limits';
import {
  ProjectRateLimit,
  ProjectRateLimitsPage,
  RateLimitListRateLimitsParams,
  RateLimitUpdateRateLimitParams,
  RateLimits,
} from './rate-limits';
import * as RolesAPI from './roles';
import {
  RoleCreateParams,
  RoleDeleteParams,
  RoleDeleteResponse,
  RoleListParams,
  RoleRetrieveParams,
  RoleUpdateParams,
  Roles,
} from './roles';
import * as ServiceAccountsAPI from './service-accounts';
import {
  ProjectServiceAccount,
  ProjectServiceAccountsPage,
  ServiceAccountCreateParams,
  ServiceAccountCreateResponse,
  ServiceAccountDeleteParams,
  ServiceAccountDeleteResponse,
  ServiceAccountListParams,
  ServiceAccountRetrieveParams,
  ServiceAccountUpdateParams,
  ServiceAccounts,
} from './service-accounts';
import * as SpendAlertsAPI from './spend-alerts';
import {
  ProjectSpendAlert,
  ProjectSpendAlertDeleted,
  ProjectSpendAlertsPage,
  SpendAlertCreateParams,
  SpendAlertDeleteParams,
  SpendAlertListParams,
  SpendAlertUpdateParams,
  SpendAlerts,
} from './spend-alerts';
import * as GroupsAPI from './groups/groups';
import {
  GroupCreateParams,
  GroupDeleteParams,
  GroupDeleteResponse,
  GroupListParams,
  GroupRetrieveParams,
  Groups,
  ProjectGroup,
  ProjectGroupsPage,
} from './groups/groups';
import * as UsersAPI from './users/users';
import {
  ProjectUser,
  ProjectUsersPage,
  UserCreateParams,
  UserDeleteParams,
  UserDeleteResponse,
  UserListParams,
  UserRetrieveParams,
  UserUpdateParams,
  Users,
} from './users/users';
import { APIPromise } from '../../../../core/api-promise';
import {
  ConversationCursorPage,
  type ConversationCursorPageParams,
  PagePromise,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Projects extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  serviceAccounts: ServiceAccountsAPI.ServiceAccounts = new ServiceAccountsAPI.ServiceAccounts(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  rateLimits: RateLimitsAPI.RateLimits = new RateLimitsAPI.RateLimits(this._client);
  modelPermissions: ModelPermissionsAPI.ModelPermissions = new ModelPermissionsAPI.ModelPermissions(
    this._client,
  );
  hostedToolPermissions: HostedToolPermissionsAPI.HostedToolPermissions =
    new HostedToolPermissionsAPI.HostedToolPermissions(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  dataRetention: DataRetentionAPI.DataRetention = new DataRetentionAPI.DataRetention(this._client);
  spendAlerts: SpendAlertsAPI.SpendAlerts = new SpendAlertsAPI.SpendAlerts(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);

  /**
   * Create a new project in the organization. Projects can be created and archived,
   * but cannot be deleted.
   *
   * @example
   * ```ts
   * const project =
   *   await client.admin.organization.projects.create({
   *     name: 'name',
   *   });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<Project> {
    return this._client.post('/organization/projects', {
      body,
      ...options,
      __security: { adminAPIKeyAuth: true },
    });
  }

  /**
   * Retrieves a project.
   *
   * @example
   * ```ts
   * const project =
   *   await client.admin.organization.projects.retrieve(
   *     'project_id',
   *   );
   * ```
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<Project> {
    return this._client.get(path`/organization/projects/${projectID}`, {
      ...options,
      __security: { adminAPIKeyAuth: true },
    });
  }

  /**
   * Modifies a project in the organization.
   *
   * @example
   * ```ts
   * const project =
   *   await client.admin.organization.projects.update(
   *     'project_id',
   *   );
   * ```
   */
  update(projectID: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<Project> {
    return this._client.post(path`/organization/projects/${projectID}`, {
      body,
      ...options,
      __security: { adminAPIKeyAuth: true },
    });
  }

  /**
   * Returns a list of projects.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const project of client.admin.organization.projects.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProjectsPage, Project> {
    return this._client.getAPIList('/organization/projects', ConversationCursorPage<Project>, {
      query,
      ...options,
      __security: { adminAPIKeyAuth: true },
    });
  }

  /**
   * Archives a project in the organization. Archived projects cannot be used or
   * updated.
   *
   * @example
   * ```ts
   * const project =
   *   await client.admin.organization.projects.archive(
   *     'project_id',
   *   );
   * ```
   */
  archive(projectID: string, options?: RequestOptions): APIPromise<Project> {
    return this._client.post(path`/organization/projects/${projectID}/archive`, {
      ...options,
      __security: { adminAPIKeyAuth: true },
    });
  }
}

export type ProjectsPage = ConversationCursorPage<Project>;

/**
 * Represents an individual project.
 */
export interface Project {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the project was created.
   */
  created_at: number;

  /**
   * The object type, which is always `organization.project`
   */
  object: 'organization.project';

  /**
   * The Unix timestamp (in seconds) of when the project was archived or `null`.
   */
  archived_at?: number | null;

  /**
   * The external key associated with the project.
   */
  external_key_id?: string | null;

  /**
   * The name of the project. This appears in reporting.
   */
  name?: string | null;

  /**
   * `active` or `archived`
   */
  status?: string | null;
}

export interface ProjectCreateParams {
  /**
   * The friendly name of the project, this name appears in reports.
   */
  name: string;

  /**
   * External key ID to associate with the project.
   */
  external_key_id?: string | null;

  /**
   * Create the project with the specified data residency region. Your organization
   * must have access to Data residency functionality in order to use. See
   * [data residency controls](https://platform.openai.com/docs/guides/your-data#data-residency-controls)
   * to review the functionality and limitations of setting this field.
   */
  geography?: string | null;
}

export interface ProjectUpdateParams {
  /**
   * External key ID to associate with the project.
   */
  external_key_id?: string | null;

  /**
   * Geography for the project.
   */
  geography?: string | null;

  /**
   * The updated name of the project, this name appears in reports.
   */
  name?: string | null;
}

export interface ProjectListParams extends ConversationCursorPageParams {
  /**
   * If `true` returns all projects including those that have been `archived`.
   * Archived projects are not included by default.
   */
  include_archived?: boolean;
}

Projects.Users = Users;
Projects.ServiceAccounts = ServiceAccounts;
Projects.APIKeys = APIKeys;
Projects.RateLimits = RateLimits;
Projects.ModelPermissions = ModelPermissions;
Projects.HostedToolPermissions = HostedToolPermissions;
Projects.Groups = Groups;
Projects.Roles = Roles;
Projects.DataRetention = DataRetention;
Projects.SpendAlerts = SpendAlerts;
Projects.Certificates = Certificates;

export declare namespace Projects {
  export {
    Project,
    ProjectsPage,
    ProjectCreateParams,
    ProjectUpdateParams,
    ProjectListParams,
  };

  export {
    Users,
    ProjectUser,
    UserDeleteResponse,
    ProjectUsersPage,
    UserCreateParams,
    UserRetrieveParams,
    UserUpdateParams,
    UserListParams,
    UserDeleteParams,
  };

  export {
    ServiceAccounts,
    ProjectServiceAccount,
    ServiceAccountCreateResponse,
    ServiceAccountDeleteResponse,
    ProjectServiceAccountsPage,
    ServiceAccountCreateParams,
    ServiceAccountRetrieveParams,
    ServiceAccountUpdateParams,
    ServiceAccountListParams,
    ServiceAccountDeleteParams,
  };

  export {
    APIKeys,
    ProjectAPIKey,
    APIKeyDeleteResponse,
    ProjectAPIKeysPage,
    APIKeyRetrieveParams,
    APIKeyListParams,
    APIKeyDeleteParams,
  };

  export {
    RateLimits,
    ProjectRateLimit,
    ProjectRateLimitsPage,
    RateLimitListRateLimitsParams,
    RateLimitUpdateRateLimitParams,
  };

  export {
    ModelPermissions,
    ProjectModelPermissions,
    ProjectModelPermissionsDeleted,
    ModelPermissionUpdateParams,
  };

  export {
    HostedToolPermissions,
    ProjectHostedToolPermissions,
    HostedToolPermissionUpdateParams,
  };

  export {
    Groups,
    ProjectGroup,
    GroupDeleteResponse,
    ProjectGroupsPage,
    GroupCreateParams,
    GroupRetrieveParams,
    GroupListParams,
    GroupDeleteParams,
  };

  export {
    Roles,
    RoleDeleteResponse,
    RoleCreateParams,
    RoleRetrieveParams,
    RoleUpdateParams,
    RoleListParams,
    RoleDeleteParams,
  };

  export {
    DataRetention,
    ProjectDataRetention,
    DataRetentionUpdateParams,
  };

  export {
    SpendAlerts,
    ProjectSpendAlert,
    ProjectSpendAlertDeleted,
    ProjectSpendAlertsPage,
    SpendAlertCreateParams,
    SpendAlertUpdateParams,
    SpendAlertListParams,
    SpendAlertDeleteParams,
  };

  export {
    Certificates,
    CertificateListResponse,
    CertificateActivateResponse,
    CertificateDeactivateResponse,
    CertificateListResponsesPage,
    CertificateActivateResponsesPage,
    CertificateDeactivateResponsesPage,
    CertificateListParams,
    CertificateActivateParams,
    CertificateDeactivateParams,
  };
}
