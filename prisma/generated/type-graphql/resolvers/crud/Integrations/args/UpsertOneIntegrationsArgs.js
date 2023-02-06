"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsCreateInput_1 = require("../../../inputs/IntegrationsCreateInput");
const IntegrationsUpdateInput_1 = require("../../../inputs/IntegrationsUpdateInput");
const IntegrationsWhereUniqueInput_1 = require("../../../inputs/IntegrationsWhereUniqueInput");
let UpsertOneIntegrationsArgs = class UpsertOneIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput)
], UpsertOneIntegrationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsCreateInput_1.IntegrationsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsCreateInput_1.IntegrationsCreateInput)
], UpsertOneIntegrationsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsUpdateInput_1.IntegrationsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsUpdateInput_1.IntegrationsUpdateInput)
], UpsertOneIntegrationsArgs.prototype, "update", void 0);
UpsertOneIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneIntegrationsArgs);
exports.UpsertOneIntegrationsArgs = UpsertOneIntegrationsArgs;
