"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsCreateInput_1 = require("../../../inputs/ReportsCreateInput");
let CreateReportsArgs = class CreateReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsCreateInput_1.ReportsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsCreateInput_1.ReportsCreateInput)
], CreateReportsArgs.prototype, "data", void 0);
CreateReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReportsArgs);
exports.CreateReportsArgs = CreateReportsArgs;
