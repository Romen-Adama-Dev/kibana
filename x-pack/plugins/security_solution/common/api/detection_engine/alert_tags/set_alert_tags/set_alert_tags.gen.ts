/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Manage alert tags API endpoint
 *   version: 2023-10-31
 */

import { z } from 'zod';

import { AlertIds, AlertTags } from '../../../model/alert.gen';

export type ManageAlertTags = z.infer<typeof ManageAlertTags>;
export const ManageAlertTags = z.object({
  tags_to_add: AlertTags,
  tags_to_remove: AlertTags,
});

export type ManageAlertTagsRequestBody = z.infer<typeof ManageAlertTagsRequestBody>;
export const ManageAlertTagsRequestBody = z.object({
  ids: AlertIds,
  tags: ManageAlertTags,
});
export type ManageAlertTagsRequestBodyInput = z.input<typeof ManageAlertTagsRequestBody>;

/**
 * Elasticsearch update by query response
 */
export type ManageAlertTagsResponse = z.infer<typeof ManageAlertTagsResponse>;
export const ManageAlertTagsResponse = z.object({}).catchall(z.unknown());
