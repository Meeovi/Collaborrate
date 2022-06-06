"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingWhereUniqueInput_1 = require("../../../inputs/MeetingWhereUniqueInput");
let FindUniqueMeetingArgs = class FindUniqueMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereUniqueInput_1.MeetingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingWhereUniqueInput_1.MeetingWhereUniqueInput)
], FindUniqueMeetingArgs.prototype, "where", void 0);
FindUniqueMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueMeetingArgs);
exports.FindUniqueMeetingArgs = FindUniqueMeetingArgs;
