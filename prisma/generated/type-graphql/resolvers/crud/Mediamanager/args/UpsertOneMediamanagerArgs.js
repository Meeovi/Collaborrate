"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerCreateInput_1 = require("../../../inputs/MediamanagerCreateInput");
const MediamanagerUpdateInput_1 = require("../../../inputs/MediamanagerUpdateInput");
const MediamanagerWhereUniqueInput_1 = require("../../../inputs/MediamanagerWhereUniqueInput");
let UpsertOneMediamanagerArgs = class UpsertOneMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput)
], UpsertOneMediamanagerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerCreateInput_1.MediamanagerCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerCreateInput_1.MediamanagerCreateInput)
], UpsertOneMediamanagerArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerUpdateInput_1.MediamanagerUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerUpdateInput_1.MediamanagerUpdateInput)
], UpsertOneMediamanagerArgs.prototype, "update", void 0);
UpsertOneMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneMediamanagerArgs);
exports.UpsertOneMediamanagerArgs = UpsertOneMediamanagerArgs;
