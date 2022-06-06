"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsCreateInput_1 = require("../../../inputs/SegmentsCreateInput");
let CreateSegmentsArgs = class CreateSegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsCreateInput_1.SegmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SegmentsCreateInput_1.SegmentsCreateInput)
], CreateSegmentsArgs.prototype, "data", void 0);
CreateSegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSegmentsArgs);
exports.CreateSegmentsArgs = CreateSegmentsArgs;
