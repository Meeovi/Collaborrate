"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsOrderByWithRelationInput_1 = require("../../../inputs/PermissionsOrderByWithRelationInput");
const PermissionsWhereInput_1 = require("../../../inputs/PermissionsWhereInput");
const PermissionsWhereUniqueInput_1 = require("../../../inputs/PermissionsWhereUniqueInput");
let AggregatePermissionsArgs = class AggregatePermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereInput_1.PermissionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsWhereInput_1.PermissionsWhereInput)
], AggregatePermissionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PermissionsOrderByWithRelationInput_1.PermissionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePermissionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput)
], AggregatePermissionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePermissionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePermissionsArgs.prototype, "skip", void 0);
AggregatePermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePermissionsArgs);
exports.AggregatePermissionsArgs = AggregatePermissionsArgs;
