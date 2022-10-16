"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsCreateManyInput_1 = require("../../../inputs/AnalyticsCreateManyInput");
let CreateManyAnalyticsArgs = class CreateManyAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsCreateManyInput_1.AnalyticsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAnalyticsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAnalyticsArgs.prototype, "skipDuplicates", void 0);
CreateManyAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAnalyticsArgs);
exports.CreateManyAnalyticsArgs = CreateManyAnalyticsArgs;
