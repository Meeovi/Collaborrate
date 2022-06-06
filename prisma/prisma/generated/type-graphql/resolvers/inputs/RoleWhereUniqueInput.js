"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleWhereUniqueInput = class RoleWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RoleWhereUniqueInput.prototype, "id", void 0);
RoleWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleWhereUniqueInput", {
        isAbstract: true
    })
], RoleWhereUniqueInput);
exports.RoleWhereUniqueInput = RoleWhereUniqueInput;
