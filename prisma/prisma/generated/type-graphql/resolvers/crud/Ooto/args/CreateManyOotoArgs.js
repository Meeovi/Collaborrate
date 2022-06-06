"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoCreateManyInput_1 = require("../../../inputs/OotoCreateManyInput");
let CreateManyOotoArgs = class CreateManyOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoCreateManyInput_1.OotoCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOotoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyOotoArgs.prototype, "skipDuplicates", void 0);
CreateManyOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOotoArgs);
exports.CreateManyOotoArgs = CreateManyOotoArgs;
