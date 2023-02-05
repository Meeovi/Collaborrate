"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmailsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueEmailsOrThrowArgs_1 = require("./args/FindUniqueEmailsOrThrowArgs");
const Emails_1 = require("../../../models/Emails");
const helpers_1 = require("../../../helpers");
let FindUniqueEmailsOrThrowResolver = class FindUniqueEmailsOrThrowResolver {
    async findUniqueEmailsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Emails_1.Emails, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmailsOrThrowArgs_1.FindUniqueEmailsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueEmailsOrThrowResolver.prototype, "findUniqueEmailsOrThrow", null);
FindUniqueEmailsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], FindUniqueEmailsOrThrowResolver);
exports.FindUniqueEmailsOrThrowResolver = FindUniqueEmailsOrThrowResolver;
