"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationCreateInput_1 = require("../../../inputs/InternalizationCreateInput");
const InternalizationUpdateInput_1 = require("../../../inputs/InternalizationUpdateInput");
const InternalizationWhereUniqueInput_1 = require("../../../inputs/InternalizationWhereUniqueInput");
let UpsertInternalizationArgs = class UpsertInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput)
], UpsertInternalizationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationCreateInput_1.InternalizationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationCreateInput_1.InternalizationCreateInput)
], UpsertInternalizationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationUpdateInput_1.InternalizationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationUpdateInput_1.InternalizationUpdateInput)
], UpsertInternalizationArgs.prototype, "update", void 0);
UpsertInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertInternalizationArgs);
exports.UpsertInternalizationArgs = UpsertInternalizationArgs;
