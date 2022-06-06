"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleCreateInput = class RoleCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateInput.prototype, "role_name", void 0);
RoleCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateInput", {
        isAbstract: true
    })
], RoleCreateInput);
exports.RoleCreateInput = RoleCreateInput;
