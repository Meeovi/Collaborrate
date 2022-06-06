"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let PermissionsCreateManyInput = class PermissionsCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], PermissionsCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PermissionsCreateManyInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsCreateManyInput.prototype, "content", void 0);
PermissionsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PermissionsCreateManyInput", {
        isAbstract: true
    })
], PermissionsCreateManyInput);
exports.PermissionsCreateManyInput = PermissionsCreateManyInput;
