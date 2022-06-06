"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsCreateManyInput_1 = require("../../../inputs/TargetsCreateManyInput");
let CreateManyTargetsArgs = class CreateManyTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TargetsCreateManyInput_1.TargetsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTargetsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTargetsArgs.prototype, "skipDuplicates", void 0);
CreateManyTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTargetsArgs);
exports.CreateManyTargetsArgs = CreateManyTargetsArgs;
