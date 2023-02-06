"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsCreateManyInput_1 = require("../../../inputs/SegmentsCreateManyInput");
let CreateManySegmentsArgs = class CreateManySegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SegmentsCreateManyInput_1.SegmentsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySegmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySegmentsArgs.prototype, "skipDuplicates", void 0);
CreateManySegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySegmentsArgs);
exports.CreateManySegmentsArgs = CreateManySegmentsArgs;
