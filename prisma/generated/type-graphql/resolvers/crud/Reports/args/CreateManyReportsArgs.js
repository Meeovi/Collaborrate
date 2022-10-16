"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsCreateManyInput_1 = require("../../../inputs/ReportsCreateManyInput");
let CreateManyReportsArgs = class CreateManyReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsCreateManyInput_1.ReportsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReportsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReportsArgs.prototype, "skipDuplicates", void 0);
CreateManyReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReportsArgs);
exports.CreateManyReportsArgs = CreateManyReportsArgs;
