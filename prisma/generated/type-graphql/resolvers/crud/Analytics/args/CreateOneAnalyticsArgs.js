"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsCreateInput_1 = require("../../../inputs/AnalyticsCreateInput");
let CreateOneAnalyticsArgs = class CreateOneAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsCreateInput_1.AnalyticsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AnalyticsCreateInput_1.AnalyticsCreateInput)
], CreateOneAnalyticsArgs.prototype, "data", void 0);
CreateOneAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAnalyticsArgs);
exports.CreateOneAnalyticsArgs = CreateOneAnalyticsArgs;
