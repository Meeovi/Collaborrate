"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEmailsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstEmailsOrThrowArgs_1 = require("./args/FindFirstEmailsOrThrowArgs");
const Emails_1 = require("../../../models/Emails");
const helpers_1 = require("../../../helpers");
let FindFirstEmailsOrThrowResolver = class FindFirstEmailsOrThrowResolver {
    async findFirstEmailsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmailsOrThrowArgs_1.FindFirstEmailsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstEmailsOrThrowResolver.prototype, "findFirstEmailsOrThrow", null);
FindFirstEmailsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], FindFirstEmailsOrThrowResolver);
exports.FindFirstEmailsOrThrowResolver = FindFirstEmailsOrThrowResolver;
