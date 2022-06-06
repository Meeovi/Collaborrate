"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysUpdateManyMutationInput_1 = require("../../../inputs/SurveysUpdateManyMutationInput");
const SurveysWhereInput_1 = require("../../../inputs/SurveysWhereInput");
let UpdateManySurveysArgs = class UpdateManySurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysUpdateManyMutationInput_1.SurveysUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SurveysUpdateManyMutationInput_1.SurveysUpdateManyMutationInput)
], UpdateManySurveysArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SurveysWhereInput_1.SurveysWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SurveysWhereInput_1.SurveysWhereInput)
], UpdateManySurveysArgs.prototype, "where", void 0);
UpdateManySurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySurveysArgs);
exports.UpdateManySurveysArgs = UpdateManySurveysArgs;
