"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesCreateInput_1 = require("../../../inputs/TemplatesCreateInput");
const TemplatesUpdateInput_1 = require("../../../inputs/TemplatesUpdateInput");
const TemplatesWhereUniqueInput_1 = require("../../../inputs/TemplatesWhereUniqueInput");
let UpsertOneTemplatesArgs = class UpsertOneTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput)
], UpsertOneTemplatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesCreateInput_1.TemplatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesCreateInput_1.TemplatesCreateInput)
], UpsertOneTemplatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesUpdateInput_1.TemplatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesUpdateInput_1.TemplatesUpdateInput)
], UpsertOneTemplatesArgs.prototype, "update", void 0);
UpsertOneTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTemplatesArgs);
exports.UpsertOneTemplatesArgs = UpsertOneTemplatesArgs;
