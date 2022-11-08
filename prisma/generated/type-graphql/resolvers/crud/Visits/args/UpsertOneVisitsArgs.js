"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsCreateInput_1 = require("../../../inputs/VisitsCreateInput");
const VisitsUpdateInput_1 = require("../../../inputs/VisitsUpdateInput");
const VisitsWhereUniqueInput_1 = require("../../../inputs/VisitsWhereUniqueInput");
let UpsertOneVisitsArgs = class UpsertOneVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereUniqueInput_1.VisitsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsWhereUniqueInput_1.VisitsWhereUniqueInput)
], UpsertOneVisitsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsCreateInput_1.VisitsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsCreateInput_1.VisitsCreateInput)
], UpsertOneVisitsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsUpdateInput_1.VisitsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsUpdateInput_1.VisitsUpdateInput)
], UpsertOneVisitsArgs.prototype, "update", void 0);
UpsertOneVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneVisitsArgs);
exports.UpsertOneVisitsArgs = UpsertOneVisitsArgs;
