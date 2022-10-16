"use strict";
var RolesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let RolesWhereInput = RolesWhereInput_1 = class RolesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RolesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RolesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RolesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RolesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RolesWhereInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RolesWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], RolesWhereInput.prototype, "created_at", void 0);
RolesWhereInput = RolesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesWhereInput", {
        isAbstract: true
    })
], RolesWhereInput);
exports.RolesWhereInput = RolesWhereInput;
