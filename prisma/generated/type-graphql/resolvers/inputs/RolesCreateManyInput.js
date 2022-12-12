"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RolesCreateManyInput = class RolesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RolesCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RolesCreateManyInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesCreateManyInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RolesCreateManyInput.prototype, "created_at", void 0);
RolesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesCreateManyInput", {
        isAbstract: true
    })
], RolesCreateManyInput);
exports.RolesCreateManyInput = RolesCreateManyInput;
