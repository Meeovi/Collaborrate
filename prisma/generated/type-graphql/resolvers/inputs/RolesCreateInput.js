"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RolesCreateInput = class RolesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RolesCreateInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesCreateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RolesCreateInput.prototype, "created_at", void 0);
RolesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesCreateInput", {
        isAbstract: true
    })
], RolesCreateInput);
exports.RolesCreateInput = RolesCreateInput;
