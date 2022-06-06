"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleCreateManyInput = class RoleCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RoleCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateManyInput.prototype, "role_name", void 0);
RoleCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateManyInput", {
        isAbstract: true
    })
], RoleCreateManyInput);
exports.RoleCreateManyInput = RoleCreateManyInput;
