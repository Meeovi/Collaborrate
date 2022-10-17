"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysCreateInput_1 = require("../../../inputs/SurveysCreateInput");
const SurveysUpdateInput_1 = require("../../../inputs/SurveysUpdateInput");
const SurveysWhereUniqueInput_1 = require("../../../inputs/SurveysWhereUniqueInput");
let UpsertOneSurveysArgs = class UpsertOneSurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereUniqueInput_1.SurveysWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysWhereUniqueInput_1.SurveysWhereUniqueInput)
], UpsertOneSurveysArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysCreateInput_1.SurveysCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysCreateInput_1.SurveysCreateInput)
], UpsertOneSurveysArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysUpdateInput_1.SurveysUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysUpdateInput_1.SurveysUpdateInput)
], UpsertOneSurveysArgs.prototype, "update", void 0);
UpsertOneSurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSurveysArgs);
exports.UpsertOneSurveysArgs = UpsertOneSurveysArgs;
