"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysWhereInput_1 = require("../../../inputs/SurveysWhereInput");
let DeleteManySurveysArgs = class DeleteManySurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereInput_1.SurveysWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereInput_1.SurveysWhereInput)
], DeleteManySurveysArgs.prototype, "where", void 0);
DeleteManySurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySurveysArgs);
exports.DeleteManySurveysArgs = DeleteManySurveysArgs;
