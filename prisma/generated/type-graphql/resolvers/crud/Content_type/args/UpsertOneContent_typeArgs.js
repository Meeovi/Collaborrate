"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneContent_typeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeCreateInput_1 = require("../../../inputs/Content_typeCreateInput");
const Content_typeUpdateInput_1 = require("../../../inputs/Content_typeUpdateInput");
const Content_typeWhereUniqueInput_1 = require("../../../inputs/Content_typeWhereUniqueInput");
let UpsertOneContent_typeArgs = class UpsertOneContent_typeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeWhereUniqueInput_1.Content_typeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Content_typeWhereUniqueInput_1.Content_typeWhereUniqueInput)
], UpsertOneContent_typeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeCreateInput_1.Content_typeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Content_typeCreateInput_1.Content_typeCreateInput)
], UpsertOneContent_typeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeUpdateInput_1.Content_typeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Content_typeUpdateInput_1.Content_typeUpdateInput)
], UpsertOneContent_typeArgs.prototype, "update", void 0);
UpsertOneContent_typeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneContent_typeArgs);
exports.UpsertOneContent_typeArgs = UpsertOneContent_typeArgs;
