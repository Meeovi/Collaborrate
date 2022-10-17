"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsCreateInput_1 = require("../../../inputs/ReportsCreateInput");
let CreateOneReportsArgs = class CreateOneReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsCreateInput_1.ReportsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsCreateInput_1.ReportsCreateInput)
], CreateOneReportsArgs.prototype, "data", void 0);
CreateOneReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneReportsArgs);
exports.CreateOneReportsArgs = CreateOneReportsArgs;
