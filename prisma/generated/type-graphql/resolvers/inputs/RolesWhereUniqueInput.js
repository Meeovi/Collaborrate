"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RolesWhereUniqueInput = class RolesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RolesWhereUniqueInput.prototype, "id", void 0);
RolesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesWhereUniqueInput", {
        isAbstract: true
    })
], RolesWhereUniqueInput);
exports.RolesWhereUniqueInput = RolesWhereUniqueInput;
