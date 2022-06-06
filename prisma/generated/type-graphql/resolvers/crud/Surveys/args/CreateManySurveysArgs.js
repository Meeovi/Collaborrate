"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySurveysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SurveysCreateManyInput_1 = require("../../../inputs/SurveysCreateManyInput");
let CreateManySurveysArgs = class CreateManySurveysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysCreateManyInput_1.SurveysCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySurveysArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySurveysArgs.prototype, "skipDuplicates", void 0);
CreateManySurveysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySurveysArgs);
exports.CreateManySurveysArgs = CreateManySurveysArgs;
