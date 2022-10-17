"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyContractsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ContractsCreateManyInput_1 = require("../../../inputs/ContractsCreateManyInput");
let CreateManyContractsArgs = class CreateManyContractsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ContractsCreateManyInput_1.ContractsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyContractsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyContractsArgs.prototype, "skipDuplicates", void 0);
CreateManyContractsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyContractsArgs);
exports.CreateManyContractsArgs = CreateManyContractsArgs;
